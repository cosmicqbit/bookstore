import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const Signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // Hash Password
    const hashPassowrd = await bcrypt.hash(password, 10);

    const createdUser = new User({
      name: name,
      email: email,
      password: hashPassowrd,
    });

    await createdUser.save();
    res.status(200).json({
      msg: "User created Successfully",
      user: {
        _id: createdUser._id,
        name: createdUser.name,
        email: createdUser.email,
      },
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Something went wrong" });
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check if user exists
    const user = await User.findOne({ email });

    // Validate password

    const validPass = await bcrypt.compare(password, user.password);

    if (!user || !validPass) {
      return res.status(400).json({ msg: "Invalid email or password" });
    }

    res.status(200).json({
      message: "Login successful",
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json("Internal Server Error");
  }
};
