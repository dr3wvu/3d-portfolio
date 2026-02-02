const skills = ['Web Design', 'React', 'Full Stack', 'Sports']

export default function Skills() {
  return (
    <section className="section grid grid-cols-2 md:grid-cols-4 gap-6">
      {skills.map((skill) => (
        <div
          key={skill}
          className="bg-white/40 rounded-xl p-6 text-center hover:scale-105 transition"
        >
          <div className="h-16 mb-4 bg-accent/20 rounded-lg" />
          <p className="font-semibold">{skill}</p>
        </div>
      ))}
    </section>
  )
}
