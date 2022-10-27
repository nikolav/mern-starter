const unpackBlob = async (blob, width = 1024) => {
  const filename$ = new Blob([blob.slice(0, width)]);
  const file$ = new Blob([blob.slice(width)]);

  const filename = (await filename$.text()).trim().replace(/\x00/g, "");

  return [filename, file$];
};

export default unpackBlob;
