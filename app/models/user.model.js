export default (requelize, Sequelize) => {
    const User = requelize.define("user", {
        username: {
            type: Sequelize.STRING,
            unique: true,
        },
        email: {
            type: Sequelize.STRING,
            unique: true,
        },
        password: {
            type: Sequelize.STRING,
        }
    })
    return User;
}