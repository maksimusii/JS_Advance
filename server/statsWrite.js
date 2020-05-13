const fs = require('fs');
const moment = require('moment');

const file = './server/db/stats.json';

moment.locale('ru'); 

const stats = {
    action: '',
    date: '',
    producName: '',
};

  const statsWrite = (name, action) => {
    stats.action = action;
    stats.date = `${moment().format('LL')} ${moment().format('LTS')}`;
    stats.producName = name;
    fs.readFile(file, 'utf-8', (err, statsData) => {
      if (err) {
        res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
      } else {
        const newStats = JSON.parse(statsData);
        newStats.push(stats);
        fs.writeFileSync(file, JSON.stringify(newStats, null, 4), (err) => {
          if (err) {
            console.log(err);
          }
        })
      }
    })
};
module.exports = statsWrite;