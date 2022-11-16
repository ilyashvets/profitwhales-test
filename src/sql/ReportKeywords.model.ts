// @ts-ignore
export const ReportKeywordsModel = (sequelize, Sequelize) => {
    return sequelize.define('ReportKeywords', {
        userId: {
            type: Sequelize.INTEGER
        },
        eventDate: {
            type: Sequelize.DATE
        },
        generatedAtDateTime: {
            type: Sequelize.DATE
        },
        keywordId: {
            type: Sequelize.INTEGER
        },
        impressions: {
            type: Sequelize.INTEGER
        },
        clicks: {
            type: Sequelize.INTEGER
        },
        cost: {
            type: Sequelize.FLOAT
        },
        orders: {
            type: Sequelize.INTEGER
        },
        sales: {
            type: Sequelize.FLOAT
        }
    });
};