import { FunctionalComponent } from 'preact';
import useData from './useData.hook';

const Section: FunctionalComponent<{ title: string }> = ({ title, children }) => (
  <section className="flex flex-col gap-4 px-4 py-6 my-6 border-2 border-slate-600 rounded-md">
    <h1 className="font-bold text-2xl">{title}</h1>
    {children}
  </section>
)

const Input: FunctionalComponent<{ value: string, type?: string, label: string }> = ({ value, type, label }) => (
  <input
    value={value}
    type={type || 'text'}
    placeholder={label}
    className="font-medium bg-slate-400 focus:bg-slate-200 text-black placeholder:text-slate-600 px-4 py-2 rounded-lg w-full"
  />
)

const AddButton = () => (
  <button className="bg-blue-500 px-6 py-3 rounded-full text-2xl font-medium self-start">+</button>
)

const Admin = () => {
  const data = useData();

  if (!data) {
    return "Loading..."
  }

  return (
    <main className="max-w-3xl mx-auto flex flex-col">
      <Section title="Basics">
        <Input value={data.basics.name} label="Name" />
        <Input value={data.basics.label} label="Position" />
        <Input value={data.basics.email} type="email" label="E-mail" />
        <Input value={data.basics.url} label="Website" />
        <Input value={data.basics.birthday} type="date" label="Birthday" />
        <div className="flex gap-x-4">
          <Input value={data.basics.location.city} label="City" />
          <Input value={data.basics.location.country} label="Country" />
        </div>
      </Section>
      <Section title="Profiles">
        {data.basics.profiles.map(profile => (
          <div className="flex gap-x-4" key={profile.network}>
            <Input value={profile.network} label="Network" />
            <Input value={profile.url} label="URL" />
            <Input value={profile.username} label="Username" />
          </div>
        ))}
        <AddButton />
      </Section>
      <Section title="Work">
        {data.work.map(work => (
          <div className="flex gap-x-4" key={work.name}>
            <Input value={work.name} label="Company Name" />
            <Input value={work.position} label="Position" />
            <Input value={work.url} label="URL" />
          </div>
        ))}
        <AddButton />
      </Section>
      <Section title="Education">
        {data.education.map(edu => (
          <div className="flex gap-x-4" key={edu.institution}>
            <Input value={edu.institution} label="University" />
            <Input value={edu.url} label="URL" />
            <Input value={edu.area} label="Area" />
            <Input value={edu.studyType} label="Study Type" />
          </div>
        ))}
        <AddButton />
      </Section>
      <button className="bg-green-500 px-6 py-3 rounded-full text-2xl font-medium self-end">Save</button>
      <pre className="text-white">
        {JSON.stringify(data, null, 2)}
      </pre>
    </main>
  )
}

export default Admin
