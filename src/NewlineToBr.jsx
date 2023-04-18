export function NewlineToBr({ text }) {
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
