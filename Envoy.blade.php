@servers(['web' => 'mrmallow.nl@vps01.marshmallow.customer.cacholong.nl'])

@setup
    $document_root = '/srv/www/mrmallow.nl/vhosts/www';
@endsetup

@story('deploy')
    git_update
    update_js
    build_static_pages
    create_public_symlink
@endstory

@task('git_update')
    echo "Update GIT"
    cd {{ $document_root }}
    git pull --recurse-submodules
@endtask

@task('update_js')
    echo "Install javascript packages"
    cd {{ $document_root }}
    npm install
@endtask

@task('build_static_pages')
    echo "Build static pages"
    cd {{ $document_root }}
    npm run docs:build
@endtask

@task('create_public_symlink')
    ln -nfs /srv/www/mrmallow.nl/vhosts/www/.vuepress/dist/ /srv/www/mrmallow.nl/vhosts/www/public
@endtask

@finished
    @slack('https://hooks.slack.com/services/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', '#deployer', 'Deployment for MrMallow docs is ready.')
@endfinished
