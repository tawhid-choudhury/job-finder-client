import { useQuery } from '@tanstack/react-query';

const useAllJobs = () => {
    const { isPending, error, data, refetch } = useQuery(
        {
            queryKey: ["tawhid_assignment10_allJobs"],
            queryFn: async () => {
                const fetchedData = await fetch(`http://localhost:5000/alljobs`);
                return await fetchedData.json();
            }
        }
    )

    return ({ isPending, error, data, refetch });
};

export default useAllJobs;