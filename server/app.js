const express = require("express");
const app = express();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const morgan = require("morgan");

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

async function main() {
  // Getting the Boss
  const users = await prisma.users.findMany({
    include: {
      roles: true,
      universities: true,
      wallets: true,
    },
  });

  users
    .filter((user) => user.role_id === 1n)
    .forEach((user) => {
      console.log(`User: ${user.username}, Phone Number: ${user.phone_number}`);
      console.log(`Role: ${user.roles.name}`);

      console.log(`University: ${user.universities.name}`);
      console.log(`University Site: ${user.universities.site}`);

      if (user.wallets.length > 0) {
        user.wallets.forEach((wallet) => {
          console.log(`Wallet Balance: ${wallet.balance}`);
        });
      }
    });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

// const argon2 = require("argon2");

// async function hashPassword(password) {
//   try {
//     // هش کردن رمز عبور
//     const hash = await argon2.hash(password, {
//       type: argon2.argon2id, // بهترین نوع Argon2 برای مقاومت در برابر حملات
//       memoryCost: 2 ** 16, // مقدار حافظه (64MB - قابل تنظیم)
//       timeCost: 3, // تعداد تکرار الگوریتم
//       parallelism: 1, // تعداد پردازش‌های موازی
//     });
//     await console.log(hash);
//   } catch (err) {
//     console.error("Error hashing password:", err);
//     throw err;
//   }
// }

// hashPassword("Erfan@09331732701");

function getUsers() {
  (req, res) => {
    res.json({ users: ["Erfan", "Ali"] });
  };
}

app.route("/api").get(getUsers);

module.exports = app;
