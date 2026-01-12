# Weekly Training Plan Generator  

This generator page provides a simple way to create a seven-day training plan based on your weight, goal, and current stats. To use it:  

- Navigate to `/generator` on the Game Ready site.  
- Enter your weight in kilograms or pounds, specify your goal (for example: "build strength" or "lose weight"), and describe your current stats.  
- Click **Generate Plan** to produce a weekly schedule of bodyweight exercises. Each day includes the exercise type, recommended repetitions, and rest intervals.  
- After the plan appears, you can click **Export as PDF** to open your browser’s print dialog and save the plan as a PDF.  

The generator uses a simple template for demonstration purposes; you can modify the logic in `app/generator/page.tsx` to produce more personalised routines.  

To deploy updates locally, run `npm run dev`, and push your changes to the `main` branch. Vercel will automatically build and deploy the project.
