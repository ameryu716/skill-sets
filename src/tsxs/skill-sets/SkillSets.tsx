import ElSkillCategoryItem from "../skill-category-item/SkillCategoryItem"
import styles from './skill-sets.module.css'
import github_mark from '@/assets/github-mark.svg'
import arrow_left from '@/assets/arrow-left.svg'
import { skill_sets_structures } from "./skill-data"

const ElSkillSets = () => {
    return (
        <>
            <div className="root">
                <div className="paper">
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
            </div>
        </>
    )
}

export default ElSkillSets