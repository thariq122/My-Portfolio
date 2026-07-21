function ExperienceCard({ title, organization, description }) {
  return (
    <article className="border-[3.3px] border-white bg-transparent p-5 w-full">
      {/* Title — #D8B7B7, ~25px, 700 */}
      <h3 className="text-text-muted font-bold text-sm md:text-[24.93px]
        leading-[26.92px] tracking-[0.01em]">
        {title}
      </h3>
      {organization && (
        /* Org — #D8B7B7, 27.70px, 500 */
        <p className="text-text-muted font-medium text-xs md:text-[27.70px]
          leading-[29.91px] tracking-[0.01em] mt-0.5">
          {organization}
        </p>
      )}
      {/* Desc — #D8B7B7, 20px, 500, justified */}
      <p className="text-text-muted font-medium text-xs md:text-[20px]
        leading-[21.60px] tracking-[0.05em] text-justify mt-3">
        {description}
      </p>
    </article>
  )
}

export default ExperienceCard
