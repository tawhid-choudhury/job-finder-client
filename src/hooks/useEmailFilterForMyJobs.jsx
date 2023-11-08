import { useQuery } from "@tanstack/react-query";


const useEmailFilterForMyJobs = (employerEmail) => {
    const { isPending, error, data, refetch } = useQuery(
        {
            queryKey: ["tawhid_assignment10_allJobs"],
            queryFn: async () => {
                const fetchedData = await fetch(`http://localhost:5000/alljobs?employerEmail=${employerEmail}`, { withCredentials: true });
                return await fetchedData.json();
            }
        }
    )

    return ({ isPending, error, data, refetch });
};


export default useEmailFilterForMyJobs;