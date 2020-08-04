const code1 = 'npm list'

const code2 = `❯ npm list
/Users/joe/dev/node/cowsay
└─┬ cowsay@1.3.1
  ├── get-stdin@5.0.1
  ├─┬ optimist@0.6.1
  │ ├── minimist@0.0.10
  │ └── wordwrap@0.0.3
  ├─┬ string-width@2.1.1
  │ ├── is-fullwidth-code-point@2.0.0
  │ └─┬ strip-ansi@4.0.0
  │   └── ansi-regex@3.0.0
  └── strip-eof@1.0.0`

  const code3 = `❯ npm list --depth=0
  /Users/joe/dev/node/cowsay
  └── cowsay@1.3.1`

  const code4 = `❯ npm list cowsay
  /Users/joe/dev/node/cowsay
  └── cowsay@1.3.1`

  const code5 = `❯ npm list minimist
  /Users/joe/dev/node/cowsay
  └─┬ cowsay@1.3.1
    └─┬ optimist@0.6.1
      └── minimist@0.0.10`

const code6 = `❯ npm view cowsay version

1.3.1`

export {
  code1,
  code2,
  code3,
  code4,
  code5,
  code6
}