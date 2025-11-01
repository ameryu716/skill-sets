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
import si_mysql from '@/assets/skill-icons/mysql.svg'
import si_mssql from '@/assets/skill-icons/mssql.svg'
import si_ddb from '@/assets/skill-icons/ddb.svg'


// 
const skill_sets_structures: skill_set_category_item[] = [
    {
        category: "FrontEnd",
        lists: [
            {
                icon_path: si_vue,
                name: "Vue(v2系,v3系)",
                career: 4,
                sentence: "VueJSはメインで扱ってきた言語です。",
            },
            {
                icon_path: si_svelte,
                name: "Svelte",
                career: 1,
                sentence: "SvelteはVueの次に好きなFWで、好んで使用しています。",
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
                sentence: "Sanctumの使用を含むセキュアなREST-APIを、Laravelで構築・運用した経験があります。",
            },
            {
                icon_path: si_nodejs,
                name: "NodeJS(Express)",
                career: 1.5,
                sentence: "AWS Lambdaで動作するREST-APIを、Expressを用いて構築しました。",
            },
        ],
    },
    {
        category: "Infrastructure",
        lists: [
            {
                icon_path: si_linux,
                name: "Linux(WSL&Ubuntu)",
                career: 1,
                sentence: "WSLやUbuntuを開発業務や社内サーバーの運用を通して使用した経験があります。",
            },
            {
                icon_path: si_aws,
                name: "AWS",
                career: 2,
                sentence: "LambdaやDynamoDB、API-Gatewayはもちろん、Amplifyを通したAWSアプリケーションの構築も経験しました。",
            },
        ],
    },
    {
        category: "Database",
        lists: [
            {
                icon_path: si_mysql,
                name: "MySQL",
                career: 2,
                sentence: "基本的なSQL操作、インデックス設定を含んだDB設計の経験があります。",
            },
            {
                icon_path: si_mssql,
                name: "SQL Server",
                career: 1,
                sentence: "基本的な操作、構文、基礎知識があります。",
            },
            {
                icon_path: si_ddb,
                name: "AWS DynamoDB",
                career: 1.5,
                sentence: "1万人規模の利用を見込むアプリケーションでの、キーシャーディングを考慮した設計を行った経験があります。",
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
                sentence: "このPortfolioページはReactを用いて作成しました。",
            },
            {
                icon_path: si_kotlin,
                name: "Kotlin",
                career: 0.5,
                sentence: "Kotlinを使用して独学でAndroidアプリを制作しました。",
            },
            {
                icon_path: si_cs,
                name: "C#(.Net 6,8/API/WPF)",
                career: 0.7,
                sentence: "LINQ等の基礎的な構文を理解しています。",
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
                sentence: "Win11をメインで使用しています。",
            },
        ],
    },
]

export { skill_sets_structures }
