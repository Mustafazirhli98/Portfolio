import SkillsList from "./SkillsList";
import ExperienceList from "./ExperienceList";
import EducationList from "./EducationList";

export default function ListOverlay({ dataType, data }) {
    let ComponentToRender = null;

    if (dataType === "skills") {
        ComponentToRender = <SkillsList data={data} />;
    } else if (dataType === "experience") {
        ComponentToRender = <ExperienceList data={data} />;
    } else if (dataType === "education") {
        ComponentToRender = <EducationList data={data} />;
    }

    return (
        <div className="w-full mt-2">
            {ComponentToRender}
        </div>
    );
}
