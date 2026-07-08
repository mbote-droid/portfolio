/** Types + loader for the Healthcare AI Radar snapshot the showcase page renders. */
import snapshot from "@/data/radar-opportunities.json";

export type RadarSource = { title: string; url: string; source: string };

export type Opportunity = {
  theme: string;
  output_type: string;
  output_label: string;
  suggested_title: string;
  target_venues: string[];
  rationale: string;
  expertise_areas: string[];
  effort: number;
  score: number;
  score_breakdown: Record<string, number>;
  outline: string[];
  abstract: string;
  sources: RadarSource[];
};

export type RadarSnapshot = {
  generated_at: string;
  count: number;
  opportunities: Opportunity[];
};

export function getRadarSnapshot(): RadarSnapshot {
  return snapshot as RadarSnapshot;
}
