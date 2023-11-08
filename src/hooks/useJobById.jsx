import { useQuery } from '@tanstack/react-query';

const useJobById = (jobId) => {
    const { isPending, error, data, refetch } = useQuery(
        {
            queryKey: ["tawhid_assignment10_jobById", jobId], // Unique query key with the job ID
            queryFn: async () => {
                const fetchedData = await fetch(`https://assignment-11-server-one-psi.vercel.app/jobdetails/${jobId}`); // Adjust the API endpoint to include the job ID
                return await fetchedData.json();
            }
        }
    );

    return ({ isPending, error, data, refetch });
};

export default useJobById;
