<?php
/**
 * Template part for displaying page gallery in page.php.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Qlokast
 */

?>

    <section class="no-padding" id="courses">
        <div class="container-fluid">
            <div class="row no-gutter">
                <?php while ( have_posts() ) : the_post(); ?>
                    <div class="col-lg-4 col-sm-6 col-xs-12">
                        <a href='<?php the_permalink(); ?>' class="portfolio-box">
                            <?php the_post_thumbnail(''); ?>
                            <div class="portfolio-box-caption">
                                <div class="portfolio-box-caption-content">
                                    <div class="project-category text-faded">
                                        <?php the_title(); ?>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                <?php endwhile; ?>
            </div>
        </div>
    </section>