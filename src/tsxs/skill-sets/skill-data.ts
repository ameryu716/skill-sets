// Types
import type { skill_set_category_item } from "../../types"

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

// 
const skill_sets_structures: skill_set_category_item[] = [
    {
        category: "FrontEnd",
        lists: [
            {
                icon_path: si_vue,
                name: "Vue(v2系,v3系)",
                career: 3,
                sentence: "VueJS",
            },
            {
                icon_path: si_svelte,
                name: "Svelte",
                career: 1,
                sentence: "Svelte",
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
                sentence: "Laravel",

            },
            {
                icon_path: si_nodejs,
                name: "NodeJS(Express)",
                career: 1,
                sentence: "NodeJS",
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
                sentence: "Linux",
            },
            {
                icon_path: si_aws,
                name: "AWS",
                career: 2,
                sentence: "AWS",
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
                sentence: "React",
            },
            {
                icon_path: si_kotlin,
                name: "Kotlin",
                career: 0.5,
                sentence: "Kotlin",
            },
            {
                icon_path: si_cs,
                name: "C#",
                career: 0.7,
                sentence: "C#",
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
                sentence: "Win11",
            },
        ],
    },
]

export { skill_sets_structures }