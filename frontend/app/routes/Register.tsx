import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router";

const formSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Enter a valid email"),
    phone: z.string().regex(/^[0-9]{10}$/, "Phone number must be 10 digits"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // show error under confirmPassword
  });

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    const { name, email, phone, password } = data;
    console.log({ name, email, phone, password });
  };

  return (
    <div className="flex flex-col md:flex-row gap-3 h-screen">
      {/* Left Section */}
      <div className="hidden md:flex w-2/5 bg-amber-600 justify-center items-center">
        <p className="text-white">Some picture</p>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-3/5 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-10">
        <h1 className="text-2xl sm:text-3xl font-bold mt-6 mb-4 text-center">
          Create an Account
        </h1>

        {/* Form */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 w-full max-w-sm min-w-[200px]"
          >
            {/* Global Error Summary */}
            {Object.keys(form.formState.errors).length > 0 && (
              <div className="p-3 rounded-md bg-red-50 border border-red-300 text-sm text-red-600">
                <ul className="list-disc list-inside space-y-1">
                  {Object.values(form.formState.errors).map((err, i) => (
                    <li key={i}>{err.message}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Name"
                      {...field}
                      className={`form-input ${
                        form.formState.errors.name ? "border-red-500" : ""
                      }`}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Email"
                      {...field}
                      className={`form-input ${
                        form.formState.errors.email ? "border-red-500" : ""
                      }`}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Phone */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Phone Number"
                      {...field}
                      className={`form-input ${
                        form.formState.errors.phone ? "border-red-500" : ""
                      }`}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder="Password"
                        type={showPassword ? "text" : "password"}
                        {...field}
                        className={`form-input ${
                          form.formState.errors.password ? "border-red-500" : ""
                        }`}
                      />
                      {showPassword ? (
                        <EyeOff
                          className="absolute w-5 h-5 top-1/2 right-3 -translate-y-1/2 text-slate-600 cursor-pointer"
                          onClick={() => setShowPassword(false)}
                        />
                      ) : (
                        <Eye
                          className="absolute w-5 h-5 top-1/2 right-3 -translate-y-1/2 text-slate-600 cursor-pointer"
                          onClick={() => setShowPassword(true)}
                        />
                      )}
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Confirm Password */}
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder="Confirm Password"
                        type={showConfirmPassword ? "text" : "password"}
                        {...field}
                        className={`form-input ${
                          form.formState.errors.confirmPassword
                            ? "border-red-500"
                            : ""
                        }`}
                      />
                      {showConfirmPassword ? (
                        <EyeOff
                          className="absolute w-5 h-5 top-1/2 right-3 -translate-y-1/2 text-slate-600 cursor-pointer"
                          onClick={() => setShowConfirmPassword(false)}
                        />
                      ) : (
                        <Eye
                          className="absolute w-5 h-5 top-1/2 right-3 -translate-y-1/2 text-slate-600 cursor-pointer"
                          onClick={() => setShowConfirmPassword(true)}
                        />
                      )}
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Submit */}
            <Button type="submit" className="w-full rounded-full">
              Register
            </Button>
          </form>
        </Form>

        {/* Divider & Social Login */}
        <div className="w-full max-w-sm min-w-[200px] flex flex-col gap-5 mt-6">
          <div className="text-slate-600 text-sm relative w-full h-8">
            <hr className="mt-4 border-slate-400" />
            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2">
              Or register with
            </p>
          </div>

          <Button
            type="button"
            className="w-full rounded-full bg-transparent border border-slate-400 text-slate-600 font-semibold flex items-center justify-center"
          >
            <FcGoogle className="mr-2 w-5 h-5" />
            Google
          </Button>
          <Button
            type="button"
            className="w-full rounded-full bg-transparent border border-slate-400 text-slate-600 font-semibold flex items-center justify-center"
          >
            <FaApple className="mr-2 w-5 h-5" />
            Apple
          </Button>

          {/* Login Link */}
          <p className="text-sm text-slate-600 text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 hover:underline font-medium"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
