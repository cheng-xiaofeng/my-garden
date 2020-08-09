const code1 = `const os = require('os')`
const code2 = `[
  {
    model: 'Intel(R) Core(TM)2 Duo CPU     P8600  @ 2.40GHz',
    speed: 2400,
    times: {
      user: 281685380,
      nice: 0,
      sys: 187986530,
      idle: 685833750,
      irq: 0
    }
  },
  {
    model: 'Intel(R) Core(TM)2 Duo CPU     P8600  @ 2.40GHz',
    speed: 2400,
    times: {
      user: 282348700,
      nice: 0,
      sys: 161800480,
      idle: 703509470,
      irq: 0
    }
  }
]`
const code3 = `'/Users/joe'`
const code4 = `[3.68798828125, 4.00244140625, 11.1181640625]`
const code5 = `{ lo0:
  [ { address: '127.0.0.1',
      netmask: '255.0.0.0',
      family: 'IPv4',
      mac: 'fe:82:00:00:00:00',
      internal: true },
    { address: '::1',
      netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
      family: 'IPv6',
      mac: 'fe:82:00:00:00:00',
      scopeid: 0,
      internal: true },
    { address: 'fe80::1',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6',
      mac: 'fe:82:00:00:00:00',
      scopeid: 1,
      internal: true } ],
 en1:
  [ { address: 'fe82::9b:8282:d7e6:496e',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6',
      mac: '06:00:00:02:0e:00',
      scopeid: 5,
      internal: false },
    { address: '192.168.1.38',
      netmask: '255.255.255.0',
      family: 'IPv4',
      mac: '06:00:00:02:0e:00',
      internal: false } ],
 utun0:
  [ { address: 'fe80::2513:72bc:f405:61d0',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6',
      mac: 'fe:80:00:20:00:00',
      scopeid: 8,
      internal: false } ] }`

export default{
  code1,
  code2,
  code3,
  code4,
  code5,
}