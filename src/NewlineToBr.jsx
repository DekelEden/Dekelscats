export function NewlineToBr({ text }) {
  if (typeof text !== 'string') {
    return <>{text}</>
  }
  const segments = text.split('\n')

  return (
    <>
      {segments.map((seg, i, { length }) => (
        <>
          {seg}
          {i < length - 1 ? <br /> : null}
        </>
      ))}
    </>
  )
}
