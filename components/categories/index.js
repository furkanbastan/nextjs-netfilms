import Link from 'next/link';
import styles from './styles.module.css'

function Categories({ categories }) {
    return (
        <div className={styles.categories}>
            {
                categories.map(category => (
                    <Link
                        key={category.id}
                        href={`/${category.id}`}
                        className={styles.category}>
                        <div>{category.name}</div>
                    </Link>
                ))
            }

        </div>
    )
}

export default Categories;