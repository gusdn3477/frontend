import Title from '../../elements/ui/Title';
//import Content from '../../Content';
import BlogList from '../../elements/widgets/bloglist/Bloglist'; 
export default function Blog(){

    return(
        <section id="blog">
            <div class="container">
                <Title categoryName="반갑습니다."/>
                <BlogList/>
            </div>
        </section>
    )
}