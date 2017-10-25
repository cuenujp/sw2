'use strict';

module.controller('MatriculaCtrl', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {
        //listar
        $scope.lista = matricula;
        $scope.datosFormulario = {};
        $scope.panelEditar = false;
        $scope.listaMateria = materia;
        $scope.listaEstudiante = estudiantes;


        //guardar
        $scope.nuevo = function () {
            $scope.panelEditar = true;
            $scope.datosFormulario = {};
        };

        $scope.guardar = function () {
            var index = $scope.lista.indexOf($scope.datosFormulario);
            if (index === -1) {
                $scope.datosFormulario.id=idMatricula++;
                $scope.lista.push($scope.datosFormulario);
            }
            $scope.panelEditar = false;
        };
        $scope.cancelar = function () {
            $scope.panelEditar = false;
            $scope.datosFormulario = {};
        };

        //editar
        $scope.editar = function (data) {
            $scope.panelEditar = true;
            $scope.datosFormulario = data;
        };
        //eliminar
        $scope.eliminar = function (data) {
            if (confirm('\xbfDesea elminar este registro?')) {
                var index = $scope.lista.indexOf($scope.datosFormulario);
                if (index > -1) {
                    $scope.lista.splice(index, 1);
                }
            }
        };
      
    }]);