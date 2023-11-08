import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import swal from "sweetalert";

const Contact = () => {
    const { user } = useContext(AuthContext);
    const handleSub = (e) => {
        e.preventDefault();
        e.target.message.value = "";
        swal("Message Sent", "Our replresentative will reply to your message", "success")
    }


    return (
        <div>
            <h1 className="text-4xl font-bold text-center mt-36">
                Our Contact Information
            </h1>
            <div className="max-w-[90%] m-auto my-10 grid grid-cols-1 md:grid-cols-2 gap-10">

                <div>
                    <h1 className='text-3xl'>Lets arrange a meeting</h1>
                    <p className='my-4'>Feel free to contact us anytime</p>
                    <p className=' w-full mt-10 pt-3'>Email: example@email.com</p>
                    <div className="divider"></div>
                    <p className=' w-full mt-10 pt-3'>Phone: (123) 456-7890</p>
                    <div className="divider"></div>
                    <p className=' w-full mt-10 pt-3'>Address: 123 Main St, City, Country</p>
                    <div className="divider"></div>
                </div>
                <div>
                    <h1 className='text-3xl'>Send an Email </h1>
                    <h1 className='my-4'>Sending Email as: </h1>
                    <h1 className='w-full border-[1px] p-3'>{user?.email}</h1>
                    <form onSubmit={handleSub}>
                        <textarea name='message' className=' w-full pt-5 mt-6 border-[1px] border-gray-600 h-[200px]' type="text" placeholder='Write your message here'>
                        </textarea>
                        <input className='btn btn-block mt-5 btn-accent' type="submit" name="" id="" />
                    </form>
                </div>
            </div>

        </div>
    );
};


export default Contact;