const Registration = require("../model/registrationmodel");

exports.register = async (req, res) => {
  try {
    const { name, username, email, phone_num, password, confirm, gender } =
      req.body;

    const existingUser = await Registration.findOne({ email: email });

    if (password !== confirm) {
      return res.send(
        '<script>alert("Password and Confirm Password do not match.Please try again."); window.location="/index.html";</script>'
      );
    }

    if (!existingUser) {
      const registrationData = new Registration({
        name,
        username,
        email,
        phone_num,
        password,
        confirm,
        gender,
      });
      await registrationData.save();
      res.redirect("/success");
    } else {
      console.log("User already exist");
      res.redirect("/error");
    }
  } catch (error) {
    console.log(error);
    res.redirect("error");
  }
};
