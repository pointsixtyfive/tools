const xfGroups =
  process.env.NODE_ENV === 'development'
    ? {
        tools: { ppt: 6 },
      }
    : {
        tools: { ppt: 27 },
      };

export default xfGroups;
