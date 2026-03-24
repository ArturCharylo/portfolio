export function SkillCard({ title, description }: { title: string; description: string }) {
    return (
        <div className="skill-card">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}