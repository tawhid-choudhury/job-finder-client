import { useQuery } from '@tanstack/react-query';

const useAllJobs = () => {
    const { isPending, error, data, refetch } = useQuery(
        {
            queryKey: ["tawhid_assignment10_allJobs"],
            queryFn: async () => {
                const fetchedData = await fetch(`https://assignment-11-server-one-psi.vercel.app/alljobs`);
                return await fetchedData.json();
            }
        }
    )

    return ({ isPending, error, data, refetch });
};

export default useAllJobs;