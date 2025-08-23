import { serve } from 'inngest/vercel';
import inngest from '../inngestClient'; // your Inngest client
import functions from '../functions';   // your Inngest functions

export default serve({ client: inngest, functions });
