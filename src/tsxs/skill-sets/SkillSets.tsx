import type { skill_set_category_item } from "../../types"
import ElSkillCategoryItem from "../skill-category-item/SkillCategoryItem"

const skill_sets_structures: skill_set_category_item[] = [
    {
        category: "FrontEnd",
        lists: [
            {
                icon_path: "",
                name: "Vue(v2系,v3系)",
                career: 3,
            }
        ],
    },
    {
        category: "BackEnd",
        lists: [
            {
                icon_path: "",
                name: "PHP(Laravel 8,9)",
                career: 2,
            }
        ],
    },
    {
        category: "Infrastructure",
        lists: [
            {
                icon_path: "",
                name: "Linux",
                career: 1,
            },
            {
                icon_path: "",
                name: "AWS",
                career: 2,
            },
            {
                icon_path: "",
                name: "Windows:",
                career: "(Main Using)",
            },
        ],
    },
    {
        category: "Qualification",
        lists: [
            {
                icon_path: "",
                name: "ITパスポート",
                // career: 3,
            }
        ],
    },
    {
        category: "OS",
        lists: [
            {
                icon_path: "",
                name: "Windows",
                // career: 3,
            }
        ],
    },
]

const ElSkillSets = () => {
    return (
        <>
            <main className="root">
                <div>
                    <h1>Skill Sets.</h1>
                </div>
                {skill_sets_structures.map((skill, _i) =>
                    <ElSkillCategoryItem skill={skill} key={_i}></ElSkillCategoryItem>
                )}
            </main>

        </>
    )
}

export default ElSkillSets