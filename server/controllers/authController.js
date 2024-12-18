const prisma = require('../prisma/client');
const argon2 = require('argon2');

const signUp = async (req, res) => {
  const { firstName, lastName, phoneNumber, password } = req.body;

  try {
    const existingUser = await prisma.user.findUnique({
      where: { phoneNumber },
    });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: 'User with this phone number already exists.' });
    }

    const hashedPassword = await argon2.hash(password);

    const user = await prisma.users.create({
      data: {
        firstName,
        lastName,
        phoneNumber,
        password: hashedPassword,
      },
    });

    res.status(201).json({ message: 'Registration successful!' });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ message: 'Internal Server Error' });
    await prisma.$disconnect();
  }

  await prisma.$disconnect();
};

module.exports = { signUp };
