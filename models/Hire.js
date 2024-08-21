module.exports = (sequelize, DataTypes) => {
    // Define the Hire model
    const Hire = sequelize.define('Hire', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        company: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        message: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    });

    return Hire;
};
