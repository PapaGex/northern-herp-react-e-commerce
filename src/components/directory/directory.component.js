import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [{
                title: 'Chahuoa',
                imageUrl: 'https://www.reptilis.com/774-large_default/mniarogekko-rhachodactylus-chahuoa-mainland-jpg',
                id: 1,
                linkUrl: 'chahuoa'
            },
                {
                    title: 'Eurodactylodes',
                    imageUrl: 'https://pm1.narvii.com/7608/54873b53620b81688addc31a2f5ec024c45a8811r1-1920-1278v2_hq.jpg',
                    id: 2,
                    linkUrl: 'agricolae'
                },
                {
                    title: 'Leachianus',
                    imageUrl: 'https://www.lillyexotics.co.uk/sitecontrol/reptile_img/lilly19148DSC_1525.jpg',
                    id: 3,
                    linkUrl: ''
                },
                {
                    title: 'Other Geckos',
                    imageUrl: 'https://www.backwaterreptiles.com/images/geckos/leaf-tailed-gecko-for-sale.jpg',
                    size: 'large',
                    id: 4,
                    linkUrl: ''
                },
                {
                    title: 'Supplies',
                    imageUrl: '',
                    size: 'large',
                    id: 5,
                    linkUrl: 'https://b3h2.scene7.com/is/image/BedBathandBeyond/73559045597909p?$690$&wid=690&hei=690'
                }]
        }
    }

    // eslint-disable-next-line react/require-render-return
    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        );
    }
}

export default Directory;