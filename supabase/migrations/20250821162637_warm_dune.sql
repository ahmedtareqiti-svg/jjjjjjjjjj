/*
  # Create results table for contest results

  1. New Tables
    - `results`
      - `id` (integer, primary key)
      - `name` (text, not null) - Student name
      - `category` (text, nullable) - Contest category
      - `grade` (integer, nullable) - Student grade/score
      - `teacher` (text, nullable) - Teacher name
      - `created_at` (timestamp, default now())

  2. Security
    - Enable RLS on `results` table
    - Add policy for public read access (results are public)
    - Add policy for authenticated users to insert results
*/

CREATE TABLE IF NOT EXISTS results (
  id integer PRIMARY KEY,
  name text NOT NULL DEFAULT '',
  category text,
  grade integer,
  teacher text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE results ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to results"
  ON results
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated insert to results"
  ON results
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_results_name ON results USING btree (name);
CREATE INDEX IF NOT EXISTS idx_results_category ON results USING btree (category);
CREATE INDEX IF NOT EXISTS idx_results_grade ON results USING btree (grade DESC);