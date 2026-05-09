import { criteriaInfo } from '../data/applicants';

/**
 * Weighted Scoring Algorithm
 * Based on the Theoretical Framework from Chapter 1.
 *
 * Steps:
 * 1. Input Collection — gather applicant data and criterion weights
 * 2. Data Normalization — convert values to 0-1 scale (min-max)
 * 3. Weighted Score Computation — multiply normalized values by weights, sum
 * 4. Ranking — sort descending by total score
 * 5. Tie-Breaking — prioritize by highest-weighted criterion, then application date
 */

// Step 2: Normalize a single value to 0-1 using min-max normalization
export function normalizeValue(value, min, max) {
  if (max === min) return 0;
  return (value - min) / (max - min);
}

// Step 2: Normalize all criteria for a single applicant
export function normalizeApplicant(applicant) {
  const normalized = {};
  for (const [key, info] of Object.entries(criteriaInfo)) {
    normalized[key] = normalizeValue(applicant[key], info.min, info.max);
  }
  return normalized;
}

// Step 3: Compute weighted score for one applicant
// weights is an object like { education: 25, experience: 30, ... } (percentages)
export function computeWeightedScore(normalizedValues, weights) {
  let total = 0;
  const breakdown = {};

  for (const key of Object.keys(criteriaInfo)) {
    const weight = weights[key] / 100; // convert percentage to decimal
    const weighted = normalizedValues[key] * weight;
    breakdown[key] = weighted;
    total += weighted;
  }

  return { total, breakdown };
}

// Step 5: Tie-breaking comparison
// First: higher score on the most important criterion (highest weight)
// Second: earlier application date
function tieBreaker(a, b, weights, applicantsMap) {
  // Find the criterion with the highest weight
  const sortedCriteria = Object.entries(weights)
    .sort(([, w1], [, w2]) => w2 - w1);

  for (const [criterion] of sortedCriteria) {
    const aVal = a.normalized[criterion];
    const bVal = b.normalized[criterion];
    if (aVal !== bVal) {
      return bVal - aVal; // higher is better
    }
  }

  // If still tied, earlier application date wins
  const aDate = new Date(applicantsMap[a.id].applicationDate);
  const bDate = new Date(applicantsMap[b.id].applicationDate);
  return aDate - bDate;
}

// Full pipeline: Steps 1-5
export function rankApplicants(applicants, weights) {
  // Build lookup map
  const applicantsMap = {};
  applicants.forEach(a => { applicantsMap[a.id] = a; });

  // Step 2: Normalize all applicants
  const results = applicants.map(applicant => {
    const normalized = normalizeApplicant(applicant);

    // Step 3: Compute weighted scores
    const { total, breakdown } = computeWeightedScore(normalized, weights);

    return {
      id: applicant.id,
      name: applicant.name,
      raw: {
        education: applicant.education,
        experience: applicant.experience,
        technicalSkills: applicant.technicalSkills,
        examinationResults: applicant.examinationResults,
      },
      normalized,
      breakdown,
      totalScore: total,
      applicationDate: applicant.applicationDate,
    };
  });

  // Step 4: Sort descending by total score
  results.sort((a, b) => {
    const diff = b.totalScore - a.totalScore;
    if (Math.abs(diff) > 0.0001) return diff;

    // Step 5: Tie-breaking
    return tieBreaker(a, b, weights, applicantsMap);
  });

  // Assign ranks, marking ties
  let currentRank = 1;
  results.forEach((result, index) => {
    if (index === 0) {
      result.rank = currentRank;
      result.isTied = false;
    } else {
      const prev = results[index - 1];
      if (Math.abs(result.totalScore - prev.totalScore) < 0.0001) {
        result.rank = currentRank;
        result.isTied = true;
        prev.isTied = true;
      } else {
        currentRank = index + 1;
        result.rank = currentRank;
        result.isTied = false;
      }
    }
  });

  return results;
}

// Get the tie-breaking criterion name for display
export function getTieBreakReason(weights) {
  const sorted = Object.entries(weights).sort(([, w1], [, w2]) => w2 - w1);
  const topCriterion = sorted[0][0];
  return criteriaInfo[topCriterion]?.label || topCriterion;
}
