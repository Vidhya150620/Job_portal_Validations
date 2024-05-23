import { z } from "zod";

const RegisterSchema = z.object({
  fullName: z
    .string()
    .min(3, { message: "Fullname must be at least 3 characters" })
    .max(50, { message: "Fullname cannot exceed 50 characters" })
    .nonempty({ message: "Fullname is required" }),
  email: z
    .string()
    .email({ message: "Email is not valid" })
    .nonempty({ message: "Email is required" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/,
      {
        message:
          "Password must include at least one lowercase letter, one uppercase letter, one number, and one special character",
      }
    ),
  confirmPassword: z
    .string()
    .min(8, { message: "Confirm Password is required" })
    .refine(
      function (value) {
        return value === this.password;
      },
      { message: "Passwords must match" }
    ),
});

export default RegisterSchema;
