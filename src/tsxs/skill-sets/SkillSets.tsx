import type { skill_set_category_item } from "../../types"
import ElSkillCategoryItem from "../skill-category-item/SkillCategoryItem"
import styles from './skill-sets.module.css'
import github_mark from '@/assets/github-mark.svg'
import arrow_left from '@/assets/arrow-left.svg'

const skill_sets_structures: skill_set_category_item[] = [
    {
        category: "FrontEnd",
        lists: [
            {
                icon_path: "",
                name: "Vue(v2系,v3系)",
                career: 3,
            },
            {
                icon_path: "",
                name: "Svelte",
                career: 1,
            },
        ],
    },
    {
        category: "BackEnd",
        lists: [
            {
                icon_path: "",
                name: "PHP(Laravel 8,9)",
                career: 2,
            },
            {
                icon_path: "",
                name: "NodeJS(Express)",
                career: 1,
            },
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
            // {
            //     icon_path: "",
            //     name: "Windows:",
            //     career: "(Main Using)",
            // },
        ],
    },
    // {
    //     category: "Qualification",
    //     lists: [
    //         {
    //             icon_path: "",
    //             name: "ITパスポート",
    //             // career: 3,
    //         },
    //     ],
    // },
    {
        category: "OS",
        lists: [
            {
                icon_path: "",
                name: "Windows",
                // career: 3,
            },
        ],
    },
]

const ElSkillSets = () => {
    return (
        <>
            <div className="root">
                <header className={styles['header']}>
                    <a href="https://amry.life" target="__brank" className={styles['arrow-left']}>
                        <img src={arrow_left} alt="arrow-left" />
                    </a>
                    <h1 className={styles['h1']}>Skill Sets.</h1>
                    <a href="https://github.com/ameryu716" target="__brank" className={styles['github-link']}>
                        <img src={github_mark} alt="github-mark" />
                    </a>
                </header>
                <main>
                    {skill_sets_structures.map((skill, _i) =>
                        <ElSkillCategoryItem skill={skill} key={_i}></ElSkillCategoryItem>
                    )}
                </main>
            </div>
        </>
    )
}

export default ElSkillSets