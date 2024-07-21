import PROJECT_DATA from "../../lib/data/projectData"
import ProjectList from "../../components/projectsOverlay/ProjectList"
import Breadcrumps from "../../components/ui/BreadCrumps"

export default function Projects() {

    return (
        <div className="h-full p-3 lg:p-8">
            <Breadcrumps />
            <div>
                {
                    PROJECT_DATA.map(item => (
                        <div key={item.categoryName} className="mt-5 p-14">
                            <div>{item.categoryName}</div>
                            <ProjectList projects={item.projects} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


// Projelerin görsellerini küçült ve hazırla
// Her bir projenin (eğe varsa) birden fazla fotoğrafını yükle ve seçtiğinde dinamik olarak resmi değiştir. (alternatif resimler ana resmin altında küçük kutucuk şeklinde olacak.)
// Projelerin her birinde kullanılan teknolojileri icon olarak veya yazı olarak alanlarında belirt.
// Responsive design'ı hazırla.
// Sayfa açılış ve kaydırışta animasyon ekle.
// Animasyon işini About me ve homePage'e de uyarla.
// About me tasarımı değiştir.