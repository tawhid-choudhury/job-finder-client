import { Card } from '@material-tailwind/react';


const Blogs = () => {
    return (
        <div className="min-w-full min-h-screen bg-opacity-50 w-full h-full bg-gradient-to-r from-blue-800 via-accent to-error animate-gradient top-0 py-36 px-5">
            <div>
                <Card className='max-w-7xl m-auto p-5 space-y-7 my-10'>
                    <h1 className='text-2xl font-bold'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>

                    <p>
                        Access token is a short lived credential for accessing resources such as an API. It expires very quickly, e.g. 1-2 hours. It is also sent with requests to access resources. Access Token is stored temporarily in memory e.g., cookies, in-memory.
                    </p>
                    <p>
                        A refresh token is a long-lived credential used to obtain new access tokens when the current one expires. It is securely stored by the client-side application and prevents frequent user logins.Refresh Token is securely stored on the client-side.
                    </p>
                </Card>

                <Card className='max-w-7xl m-auto p-5 space-y-7 my-10'>
                    <h1 className='text-2xl font-bold'>What is express js? What is Nest JS (google it)?</h1>
                    <p>
                        Express.js is like a basic tool for making web applications in JavaScript. It helps with handling web stuff like requests and responses. It is simple and flexible, good for building simple web services.
                    </p>
                    <p>
                        Nest.js is a more advanced tool for making web apps. It uses JavaScript or TypeScript and is built on top of Express.js. Nest.js is like Express.js with extra features. It helps organize your code and makes it easier to build complex web apps. It is good for big projects and follows good coding practices.
                    </p>

                </Card>
                <Card className='max-w-7xl m-auto p-5 space-y-7 my-10'>
                    <h1 className='text-2xl font-bold mb-4'>Explain your code</h1>

                    <p className="mb-2">
                        <p>
                            In this assignment, I have used React, MongoDB, Express.js, Node.js. It features Firebase authentication and JWT-secured APIs. I used tenstack to load data and used Axios to post update and delete data,
                        </p>
                    </p>
                    <p className="mb-2">
                        <p>
                            <strong>Home page:</strong>
                        </p>
                        <ul className="list-disc pl-6">
                            <li className="mb-1">
                                <p>
                                    It imports various modules and components, including <span className="font-semibold">Helmet</span> for managing the pages title, and <span className="font-semibold">Banner</span> and <span className="font-semibold">Tabs</span> components for rendering content.
                                </p>
                            </li>
                            <li className="mb-1">
                                <p>
                                    It fetches job data using the <span className="font-semibold">useAllJobs</span> hook and stores the result in variables <span className="font-semibold">isPending</span>, <span className="font-semibold">error</span>, and <span className="font-semibold">data</span>.
                                </p>
                            </li>
                            <li className="mb-1">
                                <p>
                                    It allows users to search for jobs using a search input field. When users type in the search box, it filters the job data based on the search query and updates the <span className="font-semibold">filteredJobs</span> state.
                                </p>
                            </li>
                            <li>
                                <p>
                                    It handles different scenarios:
                                </p>
                                <ul className="list-disc pl-6">
                                    <li className="mb-1">
                                        <p>
                                            If data is still loading (<span className="font-semibold">isPending</span> is true), it displays a loading spinner.
                                        </p>
                                    </li>
                                    <li className="mb-1">
                                        <p>
                                            If an error occurs (<span className="font-semibold">error</span> is truthy), it displays an error message and an image.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Otherwise, it renders the main content, including a page title, a banner, and a list of jobs with tabs for filtering.
                                        </p>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </p>

                    <p className="mb-2">
                        <p>
                            <strong>All Jobs, applied jobs and my jobs Page:</strong>
                        </p>
                    </p>
                    <p className="mb-2">
                        The All Jobs Page is similar to the Home Page, as it features various components and functionalities. However, its primary purpose is to display all available data in a tabular format.
                    </p>
                    <p className="mb-2">
                        Applied jobs Page Shows the jobs that user applied. it is secure. it can also filter by category using react states.
                    </p>
                    <p className="mb-2">
                        my job shows the jobs that the user created
                    </p>

                    <p className="mb-2">
                        <p>
                            <strong>Sign up and Login: </strong>
                        </p>
                    </p>
                    <p className="mb-2">
                        these two pages use fire base for authentication.
                    </p>

                    <p className="mb-2">
                        <p>
                            <strong>Add a job and update a job:</strong>
                        </p>
                    </p>
                    <p className="mb-2">
                        both this pages are similar, they have a form, when submitted they make post and patch requests to the server respectively.
                    </p>




                </Card>
            </div>
        </div>
    );
};

export default Blogs;