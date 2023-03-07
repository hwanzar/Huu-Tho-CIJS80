import { useForm } from "react-hook-form";
function Form() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="Form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="name">Your Name:</label>
                    <input type="text" id="name" {...register("name", { required: true })} />
                    {errors.name && <span>This field is required</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="street">Street:</label>
                    <input type="text" id="street" {...register("street", { required: true })} />
                    {errors.street && <span>This field is required</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="postalCode">Postal Code:</label>
                    <input type="text" id="postalCode" {...register("postalCode", { required: true })} />
                    {errors.postalCode && <span>This field is required</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="city">City:</label>
                    <input type="text" id="city" {...register("city", { required: true })} />
                    {errors.city && <span>This field is required</span>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default Form