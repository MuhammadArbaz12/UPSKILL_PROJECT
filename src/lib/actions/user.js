import User from "../models/user.modal";
import { Connect } from "../mongodb/mongoose";

export const CreateOrUpdateUser = async (id, first_name, last_name, image_url, email_addresses, username) => {
    try {
        await Connect();  
        const user = await User.findOneAndUpdate(
            { clerkId: id }, 
            {
                $set: {
                    firstName: first_name,
                    lastName: last_name,
                    avator: image_url,
                    email: email_addresses[0]?.email_address,
                    username: username
                }
            },
            { new: true, upsert: true } 
        );

        return user; 
    } catch (error) {
        console.error("Error creating or updating user:", error);
        throw error; 
    }
};
export const deleteUser = async (id) => {   
    try {
        await Connect();  
        const user = await User.findOneAndDelete({ clerkId: id });

        return user; 
    } catch (error) {
        console.error("Error deleting user:", error);
        throw error; 
    }
}
