export default (args, ret) =>
  args.reduce((acc, val) => (acc && acc[val] ? acc[val] : null), ret)