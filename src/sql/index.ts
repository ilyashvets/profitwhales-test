import {Sequelize, DataTypes, Op} from "sequelize";
import {ReportKeywordsModel} from "./ReportKeywords.model";

(async () => {
    const sequelize = new Sequelize('sqlite:memory:')

    const ReportKeywords = ReportKeywordsModel(sequelize, DataTypes)

    await sequelize.sync({ force: false, logging: false });

    const res = await ReportKeywords.findAll({
        attributes: [
            [sequelize.fn('max', sequelize.col('generatedAtDateTime')), 'generatedAtDateTime'],
            'userId', 'eventDate', 'generatedAtDateTime', 'keywordId', 'impressions', 'clicks', 'cost', 'orders', 'sales'
        ],
        group: ['keywordId', 'eventDate'],
        where: {
            eventDate: {
                [Op.between]: [new Date('2020-06-23'), new Date('2020-06-24')]
            }
        }
    })

    console.log(res)
})()