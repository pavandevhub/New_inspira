/*
  # Create inquiries table for contact form submissions

  1. New Tables
    - `inquiries`
      - `id` (uuid, primary key) - Unique identifier for each inquiry
      - `name` (text) - Customer's full name
      - `email` (text) - Customer's email address
      - `phone` (text) - Customer's phone number
      - `project_type` (text) - Type of project (2 BHK, 3 BHK, Commercial, etc.)
      - `message` (text) - Customer's message/inquiry details
      - `created_at` (timestamptz) - Timestamp of when inquiry was submitted
      
  2. Security
    - Enable RLS on `inquiries` table
    - Add policy for inserting new inquiries (public access for form submissions)
    - Add policy for reading inquiries (authenticated admin access only)

  3. Notes
    - Table stores all contact form submissions
    - Public can insert (submit forms) but only authenticated users can read
    - Data is stored securely with timestamp tracking
*/

CREATE TABLE IF NOT EXISTS inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  project_type text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit inquiries"
  ON inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read inquiries"
  ON inquiries
  FOR SELECT
  TO authenticated
  USING (true);