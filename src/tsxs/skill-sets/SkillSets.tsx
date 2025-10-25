import type { skill_set_category_item } from "../../types"
import ElSkillCategoryItem from "../skill-category-item/SkillCategoryItem"
import styles from './skill-sets.module.css'
import github_mark from '@/assets/github-mark.svg'
import arrow_left from '@/assets/arrow-left.svg'
// si
import si_react from '@/assets/skill-icons/react.svg'
import si_vue from '@/assets/skill-icons/vue.svg'
import si_svelte from '@/assets/skill-icons/svelte.svg'
import si_aws from '@/assets/skill-icons/aws.svg'
import si_cs from '@/assets/skill-icons/cs.svg'
import si_linux from '@/assets/skill-icons/linux.svg'
import si_laravel from '@/assets/skill-icons/laravel.svg'
import si_nodejs from '@/assets/skill-icons/nodejs.svg'
import si_win11 from '@/assets/skill-icons/win11.svg'
import si_kotlin from '@/assets/skill-icons/kotlin.svg'


const skill_sets_structures: skill_set_category_item[] = [
    {
        category: "FrontEnd",
        lists: [
            {
                icon_path: si_vue,
                name: "Vue(v2系,v3系)",
                career: 3,
            },
            {
                icon_path: si_svelte,
                name: "Svelte",
                career: 1,
            },

        ],
    },
    {
        category: "BackEnd",
        lists: [
            {
                icon_path: si_laravel,
                name: "PHP(Laravel 8,9)",
                career: 2,
            },
            {
                icon_path: si_nodejs,
                name: "NodeJS(Express)",
                career: 1,
            },
        ],
    },
    {
        category: "Infrastructure",
        lists: [
            {
                icon_path: si_linux,
                name: "Linux",
                career: 1,
            },
            {
                icon_path: si_aws,
                name: "AWS",
                career: 2,
            },
        ],
    },
    {
        category: "独学 もしくは半年の経験 入門レベル",
        lists: [
            {
                icon_path: si_react,
                name: "React",
                career: 0.5,
            },
            {
                icon_path: si_kotlin,
                name: "Kotlin",
                career: 0.5,
            },
            {
                icon_path: si_cs,
                name: "C#",
                career: 0.7,
            },
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
                icon_path: si_win11,
                name: "Windows",
                career: "Main",
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