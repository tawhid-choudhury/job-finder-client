import { useQuery } from '@tanstack/react-query';
// import React from 'react';

const useAppliedJobsById = (applicantEmail) => {
    const { isPending, error, data, refetch } = useQuery(
        {
            queryKey: ["tawhid_assignment10_applied_jobs_by_id"],
            queryFn: async () => {
                const fetchedData = await fetch(`http://localhost:5000/allapplied?applicantEmail=${applicantEmail}`);
                return await fetchedData.json();
            }
        }
    )

    return ({ isPending, error, data, refetch });
};

export default useAppliedJobsById;