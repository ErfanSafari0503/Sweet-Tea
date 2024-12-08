-- CreateTable
CREATE TABLE `buffet_employees` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `buffet_id` BIGINT UNSIGNED NOT NULL,
    `user_id` BIGINT UNSIGNED NOT NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `deactivated_at` TIMESTAMP(0) NULL,

    INDEX `buffet_employees_buffet_id_foreign`(`buffet_id`),
    INDEX `buffet_employees_user_id_foreign`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `buffets` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `colleg_id` BIGINT UNSIGNED NOT NULL,
    `owner_user_id` BIGINT UNSIGNED NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `deactivated_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NOT NULL,

    INDEX `buffets_colleg_id_foreign`(`colleg_id`),
    INDEX `buffets_owner_user_id_foreign`(`owner_user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `colleges` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `university_id` BIGINT UNSIGNED NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NOT NULL,

    INDEX `colleges_university_id_foreign`(`university_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `gift_products` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `gift_id` BIGINT UNSIGNED NOT NULL,
    `product_id` BIGINT UNSIGNED NOT NULL,

    INDEX `gift_products_gift_id_foreign`(`gift_id`),
    INDEX `gift_products_product_id_foreign`(`product_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `gifts` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `type` ENUM('donate', 'gift') NOT NULL DEFAULT 'donate',
    `receiver_user_id` BIGINT UNSIGNED NOT NULL,
    `sender_user_id` BIGINT UNSIGNED NOT NULL,
    `title` VARCHAR(255) NULL,
    `nickname` VARCHAR(40) NULL,
    `message` TEXT NULL,
    `total_price` BIGINT NOT NULL,
    `status` ENUM('pending', 'cancelled', 'active', 'received') NOT NULL DEFAULT 'pending',
    `received_at` TIMESTAMP(0) NULL,
    `scheduled_start_at` TIMESTAMP(0) NULL,
    `scheduled_end_at` TIMESTAMP(0) NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NOT NULL,

    INDEX `gifts_receiver_user_id_foreign`(`receiver_user_id`),
    INDEX `gifts_sender_user_id_foreign`(`sender_user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `payments` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `paymentable_id` BIGINT UNSIGNED NOT NULL,
    `paymentable_type` VARCHAR(50) NOT NULL,
    `transaction_id` VARCHAR(255) NOT NULL,
    `status` ENUM('pending', 'successful', 'failed', 'cancelled') NOT NULL DEFAULT 'pending',
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NOT NULL,

    INDEX `payments_paymentable_foreign`(`paymentable_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `products` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `buffet_id` BIGINT UNSIGNED NOT NULL,
    `name` VARCHAR(40) NOT NULL,
    `size` ENUM('small', 'medium', 'large') NOT NULL,
    `price` BIGINT NOT NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `deactivated_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NOT NULL,

    INDEX `products_buffet_id_foreign`(`buffet_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `roles` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(40) NOT NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `universities` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(40) NOT NULL,
    `site` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `role_id` BIGINT UNSIGNED NOT NULL,
    `university_id` BIGINT UNSIGNED NOT NULL,
    `first_name` VARCHAR(30) NOT NULL,
    `last_name` VARCHAR(30) NULL,
    `phone_number` VARCHAR(11) NOT NULL,
    `username` VARCHAR(40) NOT NULL,
    `telegram_chat_id` BIGINT NULL,
    `password` VARCHAR(255) NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `deactivated_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NOT NULL,

    UNIQUE INDEX `users_phone_number_unique`(`phone_number`),
    INDEX `users_role_id_foreign`(`role_id`),
    INDEX `users_university_id_foreign`(`university_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wallet_transactions` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `wallet_id` BIGINT UNSIGNED NOT NULL,
    `amount` BIGINT NOT NULL,
    `type` ENUM('deposit', 'withdraw') NOT NULL DEFAULT 'deposit',
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `wallet_transactions_wallet_id_foreign`(`wallet_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wallets` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id` BIGINT UNSIGNED NOT NULL,
    `balance` BIGINT NOT NULL DEFAULT 0,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `deactivated_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NOT NULL,

    INDEX `wallets_user_id_foreign`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `buffet_employees` ADD CONSTRAINT `buffet_employees_buffet_id_foreign` FOREIGN KEY (`buffet_id`) REFERENCES `buffets`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `buffet_employees` ADD CONSTRAINT `buffet_employees_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `buffets` ADD CONSTRAINT `buffets_colleg_id_foreign` FOREIGN KEY (`colleg_id`) REFERENCES `colleges`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `buffets` ADD CONSTRAINT `buffets_owner_user_id_foreign` FOREIGN KEY (`owner_user_id`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `colleges` ADD CONSTRAINT `colleges_university_id_foreign` FOREIGN KEY (`university_id`) REFERENCES `universities`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `gift_products` ADD CONSTRAINT `gift_products_gift_id_foreign` FOREIGN KEY (`gift_id`) REFERENCES `gifts`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `gift_products` ADD CONSTRAINT `gift_products_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `gifts` ADD CONSTRAINT `gifts_receiver_user_id_foreign` FOREIGN KEY (`receiver_user_id`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `gifts` ADD CONSTRAINT `gifts_sender_user_id_foreign` FOREIGN KEY (`sender_user_id`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `payments` ADD CONSTRAINT `payments_paymentable_foreign` FOREIGN KEY (`paymentable_id`) REFERENCES `gifts`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_buffet_id_foreign` FOREIGN KEY (`buffet_id`) REFERENCES `buffets`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_university_id_foreign` FOREIGN KEY (`university_id`) REFERENCES `universities`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `wallet_transactions` ADD CONSTRAINT `wallet_transactions_wallet_id_foreign` FOREIGN KEY (`wallet_id`) REFERENCES `wallets`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `wallets` ADD CONSTRAINT `wallets_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
